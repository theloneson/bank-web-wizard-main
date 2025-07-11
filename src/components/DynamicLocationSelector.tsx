
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { countriesNowService, CountriesNowCountry, CountriesNowState } from "@/services/countriesNowService"
import { Loader2, Globe, MapPin, Building } from "lucide-react"

interface DynamicLocationSelectorProps {
  onCountryChange: (country: string) => void
  onStateChange: (state: string) => void
  onCityChange: (city: string) => void
}

export function DynamicLocationSelector({ onCountryChange, onStateChange, onCityChange }: DynamicLocationSelectorProps) {
  const [countries, setCountries] = useState<CountriesNowCountry[]>([])
  const [states, setStates] = useState<CountriesNowState[]>([])
  const [cities, setCities] = useState<string[]>([])
  
  const [selectedCountry, setSelectedCountry] = useState<string>("")
  const [selectedCountryName, setSelectedCountryName] = useState<string>("")
  const [selectedState, setSelectedState] = useState<string>("")
  
  const [loadingCountries, setLoadingCountries] = useState(true)
  const [loadingStates, setLoadingStates] = useState(false)
  const [loadingCities, setLoadingCities] = useState(false)

  // Load countries on component mount
  useEffect(() => {
    const loadCountries = async () => {
      try {
        setLoadingCountries(true)
        const countryData = await countriesNowService.getCountries()
        setCountries(countryData)
      } catch (error) {
        console.error('Failed to load countries:', error)
      } finally {
        setLoadingCountries(false)
      }
    }

    loadCountries()
  }, [])

  const handleCountryChange = async (countryName: string) => {
    const country = countries.find(c => c.name === countryName)
    if (!country) return

    setSelectedCountry(country.iso2)
    setSelectedCountryName(countryName)
    setSelectedState("")
    setStates([])
    setCities([])
    onCountryChange(countryName)

    try {
      setLoadingStates(true)
      const stateData = await countriesNowService.getStates(countryName)
      setStates(stateData)
    } catch (error) {
      console.error('Failed to load states:', error)
    } finally {
      setLoadingStates(false)
    }
  }

  const handleStateChange = async (stateName: string) => {
    setSelectedState(stateName)
    setCities([])
    onStateChange(stateName)

    if (stateName && selectedCountryName) {
      try {
        setLoadingCities(true)
        const cityData = await countriesNowService.getCities(selectedCountryName, stateName)
        setCities(cityData)
      } catch (error) {
        console.error('Failed to load cities:', error)
      } finally {
        setLoadingCities(false)
      }
    }
  }

  return (
    <div className="space-y-6">
      {/* Country Selection */}
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <Globe className="w-4 h-4 text-blue-600" />
          <label className="text-sm font-semibold text-gray-700">
            Country <span className="text-red-500">*</span>
          </label>
        </div>
        <Select onValueChange={handleCountryChange} disabled={loadingCountries}>
          <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
            <SelectValue placeholder={loadingCountries ? "Loading countries..." : "Select your country"} />
          </SelectTrigger>
          <SelectContent className="max-h-60 overflow-y-auto">
            {countries.map((country) => (
              <SelectItem key={country.iso2} value={country.name}>
                <div className="flex items-center space-x-2">
                  <span>{country.name}</span>
                  <span className="text-xs text-gray-400 ml-auto">({country.iso2})</span>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {loadingCountries && (
          <div className="flex items-center mt-2 text-sm text-blue-600">
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
            Loading countries...
          </div>
        )}
      </div>

      {/* State/Region Selection */}
      {selectedCountryName && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-blue-600" />
            <label className="text-sm font-semibold text-gray-700">
              State/Province/Region {states.length > 0 && <span className="text-red-500">*</span>}
            </label>
          </div>
          <Select 
            onValueChange={handleStateChange} 
            disabled={loadingStates || states.length === 0}
            value={selectedState}
          >
            <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
              <SelectValue 
                placeholder={
                  loadingStates ? "Loading states/regions..." : 
                  states.length === 0 ? "No states/regions available" : 
                  "Select state/province/region"
                } 
              />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {states.map((state) => (
                <SelectItem key={state.state_code || state.name} value={state.name}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {loadingStates && (
            <div className="flex items-center mt-2 text-sm text-blue-600">
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Loading states/regions...
            </div>
          )}
          {states.length === 0 && !loadingStates && selectedCountryName && (
            <p className="text-xs text-gray-500 mt-1">
              No states/regions available for {selectedCountryName}
            </p>
          )}
        </div>
      )}

      {/* City Selection */}
      {selectedState && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Building className="w-4 h-4 text-blue-600" />
            <label className="text-sm font-semibold text-gray-700">
              City {cities.length > 0 && <span className="text-red-500">*</span>}
            </label>
          </div>
          <Select onValueChange={onCityChange} disabled={loadingCities}>
            <SelectTrigger className="w-full h-12 border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all">
              <SelectValue placeholder={loadingCities ? "Loading cities..." : cities.length === 0 ? "No cities available" : "Select city"} />
            </SelectTrigger>
            <SelectContent className="max-h-60 overflow-y-auto">
              {cities.map((city, index) => (
                <SelectItem key={`${city}-${index}`} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {loadingCities && (
            <div className="flex items-center mt-2 text-sm text-blue-600">
              <Loader2 className="w-4 h-4 animate-spin mr-2" />
              Loading cities...
            </div>
          )}
          {cities.length === 0 && !loadingCities && selectedState && (
            <p className="text-xs text-gray-500 mt-1">
              No cities available for {selectedState}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
