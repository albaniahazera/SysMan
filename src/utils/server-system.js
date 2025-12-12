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

export async function get_cpu_info() {
    try {
        const response = await fetch(base_url + '/server/system/cpu', {
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
        const manufacturer = raw_data.manufacturer;
        const brand = raw_data.brand;
        const speed = raw_data.speed;
        const cores = raw_data.cores;
        const physicalCores = raw_data.physicalCores;
        return {
            res_code,
            manufacturer,
            brand,
            speed,
            cores,
            physicalCores
        }
    }catch (error) {
        console.error('Error getting cpu info', error);
    }
};

export async function get_disk_info() {
    try {
        const response = await fetch(base_url + '/server/system/disk', {
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
        const res_code = response.status;
        const main_disk = raw_data[0]
        const disk_type = main_disk ? main_disk.type : 'N/A';
        const disk = main_disk ? main_disk.name : 'N/A';
        const disk_vendor = main_disk ? main_disk.vendor : 'N/A';
        return {
            res_code,
            disk_type,
            disk,
            disk_vendor
        }
    }catch (error) {
        console.error('Error getting disk info', error);
    }
};

export async function get_network_info() {
    try {
        const response = await fetch(base_url + '/server/system/network', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'API_KEY': api_key
            }
        });

        if(!response.ok) {
            throw new error(`Server responded with status ${response.status}`);
        }
        const raw_data = await response.json();
        const res_code = response.status;
        const main_interface = raw_data;
        return {
            main_interface,
            res_code
        }

    }catch (error) {
        console.error('Error getting network info', error);
    }
};