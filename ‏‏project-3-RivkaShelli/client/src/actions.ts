export async function register(e: any, buildBody: Function) {
    e.preventDefault();
   const res = await fetch('/api/auth/register', {
        "method": "POST",
        "headers": { "Content-Type": "application/json" },
        "body": JSON.stringify(buildBody())
    });
    return await res.json();
};

export async function login(buildBody: Function) {
    const res = await fetch("/api/auth/login", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(buildBody())
    });
    return await res.json();
};

export async function getAllVacations(uid:number) {
    const res = await fetch(`/api/vacation/allVacationsByUser/${uid}`, {
        "headers": {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    return await res.json();
};

export async function getReports() {
    const res = await fetch('/api/reports', {
        "headers": {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    return await res.json();
}

export async function addVacation(e: any, buildBody: Function) {
    e.preventDefault();
    const res = await fetch('/api/vacation/add', {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + getToken()
        },
        "body": JSON.stringify(buildBody())
    });
    return await res.json();
}

export function deleteVacation(e: any, vId: number) {
    e.preventDefault();
    let api = `/api/vacation/delete`;
    let mak = api.concat('/' + vId);
    console.log(mak);
    fetch(mak, {
        "method": 'DELETE',
        "headers": {
            'Authorization': 'Bearer ' + getToken()
        }
    }).then(res => res.json()).then(res => {
        console.log(res);
        window.location.reload();
});
}

export async function updateVacation(e: any, vId: number, buildBody: Function) {
    e.preventDefault();
    let api = '/api/vacation/update';
    let mak = api.concat('/' + vId);
    console.log(mak);
    console.log(buildBody());
    const res = await fetch(mak, {
        "method": "PUT",
        "headers": {
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + getToken()
        },
        "body": JSON.stringify(buildBody())
    });
    return await res.json();
}

export function getToken() {
    return sessionStorage.getItem('token');
}

export async function getRole() {
    const res = await fetch('/api/vacation', {
        "method": "GET",
        "headers": {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    return await res.json();
}

export async function follow(vId:number) {
    const res = await fetch('/api/vacation/follow', {
        "method": "POST",
        "headers": {
            'Authorization': 'Bearer ' + getToken(),
            "Content-Type": "application/json"
            
        },
        "body": JSON.stringify({ "vid": vId })
    });
    return await res.json();
}

export async function unfollow(vId:number) {
    const res = await fetch('/api/vacation/unfollow', {
        "method": "POST",
        "headers": {
            'Authorization': 'Bearer ' + getToken(),
            "Content-Type": "application/json"
        },
        "body": JSON.stringify({ "vid": vId })
    });
    return await res.json();
}