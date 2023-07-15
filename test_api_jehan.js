const expect = require('chai').expect;
const { it, test } = require('mocha');
const api = require('../api_kuncie/api.js');

describe('API GET USER LIST - API GET {{base_url}}/api/bootcamp/users', async () => {

//PR NOMOR 1

    it('Test positive apakah createuser semua field terisi', async () => {
        let nama = 'mufti'
        const response = await api.createUser(nama);
      //  console.log(response.body)
        expect(response.status).to.equal(200, 'Halo ini response status nya tidak 200');
        expect(response.body.name).to.equal(nama);
        
    });

    it('Test positive Ketika Semua Field Terisi Kecuali Field Vehicles ', async () => {
        let data = {
            "name": "jehan",
            "phone_number": "123213213213",
            "address": "Automasi Address",
            "point": 500,
            "is_registered": true,
            "vehicles": []   
        }
        const response = await api.createUserModel2(data);
       // console.log(response.body)
        expect(response.status).to.equal(200, 'Halo ini response status nya tidak 200');
        expect(response.body.name).to.equal(data.name);

    });

    it('@Test Negative Ketika Field Terisi Cuma 1 Variabel', async () => {
        let data = [{"name": "namaUser",
        "phone_number": "1112223334440000",
        "address": "Automasi Address",
        "point": 500,
        "is_registered": true,
        }]
        
        const respone = await api.createUserModel2(data);
       // console.log(respone.body);
       // console.log('ini status ' + respone.status)
        //expect(respone.body.message).to.equal('proto: syntax error (line 1:1): unexpected token 0');
        expect(respone.status).to.equal(400, 'hasil response status tidak 400');
        expect(respone.body.code).to.equal(3)
    });

    it('@Test Negative Ketika UserID Diganti Dengan Nomor Telepon', async () => {
        let tlp = '0823123231'
        const respone = await api.createUserModel2(tlp);
       // console.log(respone.body);
       // console.log('ini status ' + respone.status)
        expect(respone.body.message).to.equal('proto: syntax error (line 1:1): unexpected token 0');
        expect(respone.status).to.equal(400, 'hasil response status tidak 400');
        expect(respone.body.code).to.equal(3)
    });

//PR NOMOR 2

    it('DELETE berhasil dan CreateUser tersimpan di HOOKS', async () => {

        console.log(global.userid)

        const responsedeleteUser = await api.deleteUser(global.userid);
        //console.log(responsedeleteUser.body);
        expect(responsedeleteUser.status).to.equal(200);
        expect(responsedeleteUser.body.id).to.equal(global.userid);

        const responsegetdata= await api.getUserDetail(global.userid)
        //console.log(responsegetdata.body);
        expect(responsegetdata.status).to.not.equal(200);
        
    
    });

})