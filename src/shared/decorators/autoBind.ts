export function autoBind(
  target: object,
  method: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  const boundDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: true,
    get() {
      return originalMethod.bind(this);
    },
  };

  return boundDescriptor;
}
