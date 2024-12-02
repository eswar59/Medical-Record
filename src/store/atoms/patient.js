import { atom, atomFamily, selectorFamily } from 'recoil'
import { PATIENTS } from '../PATIENTS'
import axios from 'axios'

export const patientsAtomFamily = atomFamily({
    key: "patientsAtomFamily",
    default: selectorFamily({
        key: "patientsSelectorFamily",
        get: function (name) {
            return async function ({ get }) {
                let username = import.meta.env.VITE_USER_NAME
                let password = import.meta.env.VITE_PASSWORD
                let auth = btoa(`${username}:${password}`)                
                const res = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev', {
                    headers: {
                        'Authorization': `Basic ${auth}`
                    }
                })                
                //const patients = await res.json();
                console.log(res.data)
                const patients = res.data;
                return patients.find(x => x.name === name);
            }
        }
    })
    // default: name => {
    //     return PATIENTS.find( x => x.name === name)
    // }
})
