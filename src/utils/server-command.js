import { get_base_url, get_api_key } from "./api-base-url";
const base_url = get_base_url();
const api_key = get_api_key();

export async function shutdown_server() {
    try {
        const response = await fetch(base_url + '/server/command/shutdown', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });

        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const message = raw_data.message;
        return {message, res_code};

    }catch (error) {
        console.error('Error shutting down server:', error);
    }
};

export async function restart_server() {
    try {
        const response = await fetch(base_url + '/server/command/restart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const message = raw_data.message;
        return {message, res_code};
    } catch (error) {
        console.error('Error restarting server:', error);
    }
};

export async function get_nginx_status() {
    try {
        const response = await fetch(base_url + '/server/command/status-nginx', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const nginx_status = raw_data.nginx_status;
        return {nginx_status, res_code};
    } catch (error) {
        console.error('Error getting Nginx status:', error);
    }
};

export async function get_jellyfin_status() {
    try {
        const response = await fetch(base_url + '/server/command/status-jellyfin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });
        if (!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const jellyfin_status = raw_data.jellyfin_status;
        return {jellyfin_status, res_code};
    }catch (error) {
        console.error('Error getting jellyfin status');
    }
}