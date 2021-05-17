export async function withFetching(func, setFetching, params = []) {
    setFetching(true);
    await func(...params);
    setFetching(false)
}