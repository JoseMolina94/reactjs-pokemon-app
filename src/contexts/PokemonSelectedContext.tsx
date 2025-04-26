'use client'

import { createContext, ReactNode, useState } from "react";

export const PokemonSelectedContext = createContext<any>(null)

type ReservationContextProviderProps = {
  children: ReactNode
}

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