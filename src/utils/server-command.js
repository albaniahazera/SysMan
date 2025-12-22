import { get_base_url, get_api_key } from "./api-base-url";
const base_url = get_base_url();
const api_key = get_api_key();

export async function shutdown_server() {
    try {
        const response = await fetch(base_url + '/server/commands/shutdown', {
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
        const response = await fetch(base_url + '/server/commands/restart', {
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
        const response = await fetch(base_url + '/server/commands/status-nginx', {
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
        const response = await fetch(base_url + '/server/commands/restart-nginx', {
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
        const response = await fetch(base_url + '/server/commands/status-jellyfin', {
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
        const response = await fetch(base_url + '/server/commands/restart-jellyfin', {
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

export async function get_cloudflared_status() {
    try {
        const response = await fetch(base_url + '/server/commands/status-cloudflared', {
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
        const cloudflared_details = raw_data.details;
        return {res_code, cloudflared_details};
    }catch (error) {
        console.log('Error get cloudflared status', error)
    }
}

export async function get_log_nginx() {
    try {
        const response = await fetch(base_url + '/server/logs/nginx/check-log-file', {
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
        const list_file = raw_data.files;
        return {res_code, list_file};
    }catch (error) {
        console.log('Error get nginx log file', error)
    }
}

export async function read_log_nginx(fileName) {
    try {
        const response = await fetch(base_url + '/server/logs/nginx/read-log-file', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            },
            body: JSON.stringify(
                {
                    "fileName": fileName
                }
            )
        });
        if(!response.ok) {
            throw new Error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const log_file = raw_data.logs;
        return log_file;
    }catch (error) {
        console.log('Error read nginx log file', error)
    }
}