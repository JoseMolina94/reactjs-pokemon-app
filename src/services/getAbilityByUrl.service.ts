export const getAbilityByUrlService = async (abilityUrl: string) => {
  const res = await fetch(abilityUrl);
  if (!res.ok) throw new Error('Error fetching Ability');
  return res.json();
};