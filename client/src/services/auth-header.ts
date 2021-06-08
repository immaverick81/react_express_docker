export const authHeader = () => {
    const auth = JSON.parse(`${localStorage.getItem('auth')}`);
    if (auth && auth.token) {
        return { Authorization: `Bearer ${auth.token}`}
    } else {
        return {};
    }
}