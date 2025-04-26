'use client'

import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

type ReservationContextProviderProps = {
  children: ReactNode
}

type PokemonSelectedContextValues = {
  pokemonSelected: string
  setPokemonSelected: Dispatch<SetStateAction<string>> | ((val: string) => void)
}

export const PokemonSelectedContext = createContext<PokemonSelectedContextValues>({
  pokemonSelected: '',
  setPokemonSelected: (val: string) => {}
})

export default function PokemonSelectedContextProvider ({ children }: ReservationContextProviderProps) {
  const [pokemonSelected, setPokemonSelected] = useState<string>('')

  return (
    <PokemonSelectedContext.Provider 
      value={{
        pokemonSelected,
        setPokemonSelected
      }}
    >
      {children}
    </PokemonSelectedContext.Provider>
  )
}