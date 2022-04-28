export interface Repository<F> {
    baseUrl: string
    find(): Promise<F[]>
}