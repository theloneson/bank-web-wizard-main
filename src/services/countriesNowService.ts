interface CountriesNowCountry {
  name: string;
  iso2: string;
  iso3: string;
}

interface CountriesNowState {
  name: string;
  state_code: string;
}

interface CountriesNowCity {
  name: string;
}

interface CountriesResponse {
  error: boolean;
  msg: string;
  data: CountriesNowCountry[];
}

interface StatesResponse {
  error: boolean;
  msg: string;
  data: {
    name: string;
    iso3: string;
    states: CountriesNowState[];
  };
}

interface CitiesResponse {
  error: boolean;
  msg: string;
  data: string[];
}

class CountriesNowService {
  private baseUrl = 'https://countriesnow.space/api/v0.1';
  private cache = new Map<string, any>();
  private cacheTimeout = 10 * 60 * 1000; // 10 minutes

  private async makeRequest<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const cacheKey = `${endpoint}${JSON.stringify(options?.body || '')}`;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      return cached.data;
    }

    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        ...options,
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
      console.error('Countries Now API error:', error);
      throw error;
    }
  }

  async getCountries(): Promise<CountriesNowCountry[]> {
    try {
      const response = await this.makeRequest<CountriesResponse>('/countries');
      if (response.error) {
        throw new Error(response.msg);
      }
      // Sort countries alphabetically
      return response.data.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error('Failed to fetch countries:', error);
      // Fallback to basic country list
      return [
        { name: 'United States', iso2: 'US', iso3: 'USA' },
        { name: 'Canada', iso2: 'CA', iso3: 'CAN' },
        { name: 'United Kingdom', iso2: 'GB', iso3: 'GBR' },
        { name: 'Germany', iso2: 'DE', iso3: 'DEU' },
        { name: 'France', iso2: 'FR', iso3: 'FRA' },
        { name: 'Nigeria', iso2: 'NG', iso3: 'NGA' },
        { name: 'Australia', iso2: 'AU', iso3: 'AUS' },
        { name: 'Brazil', iso2: 'BR', iso3: 'BRA' },
        { name: 'India', iso2: 'IN', iso3: 'IND' },
        { name: 'Japan', iso2: 'JP', iso3: 'JPN' }
      ].sort((a, b) => a.name.localeCompare(b.name));
    }
  }

  async getStates(countryName: string): Promise<CountriesNowState[]> {
    try {
      const response = await this.makeRequest<StatesResponse>('/countries/states', {
        method: 'POST',
        body: JSON.stringify({ country: countryName }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.error) {
        return []; // No states available for this country
      }

      // Sort states alphabetically
      return response.data.states.sort((a, b) => a.name.localeCompare(b.name));
    } catch (error) {
      console.error(`Failed to fetch states for ${countryName}:`, error);
      return [];
    }
  }

  async getCities(countryName: string, stateName: string): Promise<string[]> {
    try {
      const response = await this.makeRequest<CitiesResponse>('/countries/state/cities', {
        method: 'POST',
        body: JSON.stringify({ 
          country: countryName, 
          state: stateName 
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.error) {
        return []; // No cities available for this state
      }

      // Sort cities alphabetically
      return response.data.sort((a, b) => a.localeCompare(b));
    } catch (error) {
      console.error(`Failed to fetch cities for ${stateName}, ${countryName}:`, error);
      return [];
    }
  }

  clearCache(): void {
    this.cache.clear();
  }
}

export const countriesNowService = new CountriesNowService();
export type { CountriesNowCountry, CountriesNowState };