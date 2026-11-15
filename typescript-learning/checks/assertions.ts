export type IsAny<T> = 0 extends (1 & T) ? true : false;
export type Equal<A, B> = IsAny<A> extends true ? false : IsAny<B> extends true ? false : (<T>() => T extends A ? 1 : 2) extends (<T>() => T extends B ? 1 : 2) ? ((<T>() => T extends B ? 1 : 2) extends (<T>() => T extends A ? 1 : 2) ? true : false) : false;
export type Expect<T extends true> = T;
