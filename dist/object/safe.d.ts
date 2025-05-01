import { ValueProducer } from "./type/Producer";
export declare const safe: <R>(producer: () => R, options?: Partial<{
    quiet: boolean;
    default: R;
    onError: ValueProducer<R>;
}>) => R | undefined;
//# sourceMappingURL=safe.d.ts.map