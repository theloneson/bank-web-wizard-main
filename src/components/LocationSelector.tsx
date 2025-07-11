
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useEffect, useState } from "react"
import { Country, countries } from "@/utils/countries"
import { getCountryData, GeographyData } from "@/services/geographyService"

interface LocationSelectorProps {
  onCountryChange: (country: string) => void
  onStateChange: (state: string) => void
  onCityChange: (city: string) => void
}

export function LocationSelector({ onCountryChange, onStateChange, onCityChange }: LocationSelectorProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
  const [selectedState, setSelectedState] = useState<{ name: string; code: string; cities: string[] } | null>(null)
  const [countryData, setCountryData] = useState<GeographyData | null>(null)
  const [cities, setCities] = useState<string[]>([])
  const [loadingStates, setLoadingStates] = useState(false)

  useEffect(() => {
    if (selectedState) {
      setCities(selectedState.cities)
    }
  }, [selectedState])

  const handleCountryChange = async (countryCode: string) => {
    const country = countries.find(c => c.code === countryCode) || null
    setSelectedCountry(country)
    setSelectedState(null)
    setCities([])
    setCountryData(null)
    onCountryChange(countryCode)

    if (country) {
      setLoadingStates(true)
      try {
        // Try to get enhanced data from our service
        const enhancedData = await getCountryData(countryCode)
        if (enhancedData) {
          setCountryData(enhancedData)
        }
      } catch (error) {
        console.log('Enhanced geography data not available for:', countryCode)
      } finally {
        setLoadingStates(false)
      }
    }
  }

  const handleStateChange = (stateCode: string) => {
    let state = null
    
    // Check enhanced data first
    if (countryData) {
      state = countryData.states.find(s => s.code === stateCode) || null
    } else if (selectedCountry) {
      // Fallback to basic data
      const basicState = selectedCountry.states.find(s => s.code === stateCode)
      if (basicState) {
        state = basicState
      }
    }
    
    setSelectedState(state)
    onStateChange(stateCode)
  }

  // Use enhanced data if available, otherwise fall back to basic data
  const availableStates = countryData?.states || selectedCountry?.states || []

  return (
    <div className="space-y-4">
      <div>
        <Select onValueChange={handleCountryChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select country" />
          </SelectTrigger>
          <SelectContent>
            {countries.map((country) => (
              <SelectItem key={country.code} value={country.code}>
                {country.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {selectedCountry && (
        <div>
          <Select onValueChange={handleStateChange} disabled={loadingStates}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={loadingStates ? "Loading states..." : "Select state/province/region"} />
            </SelectTrigger>
            <SelectContent>
              {availableStates.map((state) => (
                <SelectItem key={state.code} value={state.code}>
                  {state.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      {selectedState && (
        <div>
          <Select onValueChange={onCityChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}
    </div>
  )
}
