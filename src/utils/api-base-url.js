export function get_base_url() {
    const ip = localStorage.getItem('sysman_api_ip');
    const port = localStorage.getItem('sysman_api_port');
    return `http://${ip}:${port}`;
}

export function get_api_key() {
    return localStorage.getItem('sysman_api_key');
}