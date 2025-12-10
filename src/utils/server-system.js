import {get_base_url, get_api_key} from './api-base-url';
const base_url = get_base_url();
const api_key = get_api_key();

export async function get_server_os_info() {
    try {
        const response = await fetch(base_url + '/server/system/os', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });
        
        if(!response.ok) {
            throw new Error(`Server responded with status ${response.status}`)
        }
        const raw_data = await response.json()
        const res_code = await response.status;
        const platform = raw_data.platform;
        const distro = raw_data.distro;
        const release = raw_data.release;
        const kernel = raw_data.kernel;
        const arch = raw_data.arch;
        return {
            res_code,
            platform,
            distro,
            release,
            kernel,
            arch
        }
    }catch (error) {
        console.error('Error getting os info', error);
    }
};

export async function get_server_status() {
    try {
        const response = await fetch(base_url + '/server/system/status', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });

        if(!response.ok) {
            throw new Error(`Server responded with status ${response.status}`)
        }
        const raw_data = await response.json();
        const res_code = await response.status;
        const cpu_load = raw_data.cpu_load;
        const os_distro = raw_data.os_distro;
        const memory = raw_data.memory_usage;
        const memory_total = raw_data.memory_usage.total;
        const memory_free = raw_data.memory_usage.free;
        const memory_used = raw_data.memory_usage.used;
        const main_disk = raw_data.disk_usage[0];
        const disk_name = main_disk ? main_disk.fs : 'N/A';
        const disk_used = main_disk ? main_disk.used : 'N/A';
        const disk_free = main_disk ? main_disk.free : 'N/A';
        const disk_size = main_disk ? main_disk.size : 'N/A';
        return {
            res_code,
            cpu_load,
            os_distro,
            memory_total,
            memory_free,
            memory_used,
            disk_name,
            disk_used,
            disk_free,
            disk_size
        }
    }catch (error) {
        console.error('Error getting server status', error);
    }
};