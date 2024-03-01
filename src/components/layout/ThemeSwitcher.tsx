import React, { useEffect, useState } from "react"
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti"
import { Button } from ".."

const ThemeSwitcher = () => {
    const [lightMode, setLightMode] = useState(true)
    let Icon = lightMode ? TiWeatherNight : TiWeatherSunny

    const handleThemeChange = () => {
        setLightMode(!lightMode)
    }

    useEffect(() => {
        switch (lightMode) {
            case true:
                document.documentElement.classList.remove("dark")
                break
            case false:
                document.documentElement.classList.add("dark")
                break
            default:
                break
        }
    }, [lightMode])

    return (
        <Button
            component="button"
            variant="icon"
            onClick={handleThemeChange}
            className="fixed z-50 top-5 right-5 py-2 px-2 flex dark:bg-secondary-dark bg-tertiary-dark rounded-full transition-all duration-300"
        >
            <Icon className="dark:text-tertiary-dark text-secondary-dark text-4xl" />
        </Button>
    )
}

export default ThemeSwitcher
