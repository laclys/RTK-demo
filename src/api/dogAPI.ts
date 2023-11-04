// Dog random

export interface Dog {
  message: string
  status: string
}

export async function fetchDogRandom(): Promise<Dog> {
  const response = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = (await response.json()) as Dog
  // console.log('data', data)
  return data
}
