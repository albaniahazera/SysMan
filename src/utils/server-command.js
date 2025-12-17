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
        const nginx_details = raw_data.details;
        return {nginx_details, res_code};
    } catch (error) {
        console.error('Error getting Nginx status:', error);
    }
};

export async function restart_nginx() {
    try {
        const response = await fetch(base_url + '/server/command/restart-nginx', {
            method: 'POST',
            headers: {
                'Conten-Type': 'application/json',
                'API_KEY': api_key
            }
        });
        if(!response.ok) {
            throw new Error(`Server responded with status ${response.status}`)
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const message_restart_nginx = raw_data.message;
        return {message_restart_nginx, res_code}
    }catch (error) {
        console.error('Error restart nginx', error)
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
        const jellyfin_details = raw_data.details;
        return {jellyfin_details, res_code};
    }catch (error) {
        console.error('Error getting jellyfin status', error);
    }
};

export async function restart_jellyfin() {
    try {
        const response = await fetch(base_url + '/server/command/restart-jellyfin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });
        if(!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const message_restart_jellyfin = raw_data.message;
        return {message_restart_jellyfin, res_code};
    }catch (error) {
        console.error('Error restart jellyfin', error);
    }
}