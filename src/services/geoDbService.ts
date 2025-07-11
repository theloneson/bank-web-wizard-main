
interface Country {
  id: string;
  name: string;
  code: string;
}

interface Region {
  id: string;
  name: string;
  countryCode: string;
}

interface City {
  id: string;
  name: string;
  region: string;
  country: string;
}

interface GeoDbResponse<T> {
  data: T[];
  metadata: {
    currentOffset: number;
    totalCount: number;
  };
}

class GeoDbService {
  private baseUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
  private cache = new Map<string, any>();
  private cacheTimeout = 5 * 60 * 1000; // 5 minutes

  private async makeRequest<T>(endpoint: string): Promise<GeoDbResponse<T>> {
    // Check cache first
    const cacheKey = endpoint;
    const cached = this.cache.get(cacheKey);
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY', // User will need to add this
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      });

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      
      // Cache the response
      this.cache.set(cacheKey, {
        data,
        timestamp: Date.now()
      });

      return data;
    } catch (error) {
      console.error('GeoDB API error:', error);
      throw error;
    }
  }

  async getCountries(): Promise<Country[]> {
    try {
      const response = await this.makeRequest<any>('/countries?limit=250');
      return response.data.map((country: any) => ({
        id: country.code,
        name: country.name,
        code: country.code
      }));
    } catch (error) {
      console.error('Failed to fetch countries:', error);
      // Fallback to basic country list
      return [
        { id: 'US', name: 'United States', code: 'US' },
        { id: 'CA', name: 'Canada', code: 'CA' },
        { id: 'GB', name: 'United Kingdom', code: 'GB' },
        { id: 'DE', name: 'Germany', code: 'DE' },
        { id: 'FR', name: 'France', code: 'FR' },
        { id: 'NG', name: 'Nigeria', code: 'NG' },
        { id: 'AU', name: 'Australia', code: 'AU' },
        { id: 'BR', name: 'Brazil', code: 'BR' },
        { id: 'IN', name: 'India', code: 'IN' },
        { id: 'JP', name: 'Japan', code: 'JP' }
      ];
    }
  }

  async getRegions(countryCode: string): Promise<Region[]> {
    try {
      const response = await this.makeRequest<any>(`/countries/${countryCode}/regions?limit=100`);
      return response.data.map((region: any) => ({
        id: region.isoCode || region.id,
        name: region.name,
        countryCode
      }));
    } catch (error) {
      console.error(`Failed to fetch regions for ${countryCode}:`, error);
      return [];
    }
  }

  async getCities(countryCode: string, regionCode?: string): Promise<City[]> {
    try {
      let endpoint = `/countries/${countryCode}/places?limit=100&types=CITY`;
      if (regionCode) {
        endpoint += `&regionCode=${regionCode}`;
      }
      
      const response = await this.makeRequest<any>(endpoint);
      return response.data.map((city: any) => ({
        id: city.id,
        name: city.name,
        region: city.region || '',
        country: city.country
      }));
    } catch (error) {
      console.error(`Failed to fetch cities for ${countryCode}:`, error);
      return [];
    }
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const geoDbService = new GeoDbService();
export type { Country, Region, City };
