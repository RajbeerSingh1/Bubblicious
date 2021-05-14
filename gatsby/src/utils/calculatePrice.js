const sizes = {
  M: 1,
  L: 1.25,
};
export default function calculatePrice(cents, size) {
  return cents * sizes[size];
}
