interface Identified {
  id: string | number;
}

export default function getById<T extends Identified>(
  array: T[],
  id: string | number
) {
  return array.find((item) => item.id === id);
}
