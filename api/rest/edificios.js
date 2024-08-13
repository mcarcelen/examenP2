var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Edificio = require('../models').edificios;
const Propietario = require('../models').propietario;
const { Op } = require('sequelize');

router.get('/findAll/json',
    function (req, res, next) {
        Edificio.findAll({
            attributes: {
                exclude:
                    ["updatedAt", "createdAt"]
            },
            include: [{
                model: Propietario,
                attributes: ['nombre', 'apellido'],
                through: { attributes: ['propietarios'] }
            }],
        })
            .then(edificios => {
                res.json(edificios);
            })
            .catch(error =>
                res.status(400).send(error))
    });

router.get('/findAll/view', function (req, res, next) {

    Edificio.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Propietario,
            attributes: ['nombre', 'apellido'],
            through: { attributes: ['propietarios'] }
        }],
    })
        .then(edificios => {
            res.render('edificios', { title: 'Edificio', arrEdificio: edificios });
        })
        .catch(error => res.status(400).send(error))
});
router.get('/findById/:id/json', function (req, res, next) {

    let id = parseInt(req.params.id);
    Edificio.findAll({
        attributes: { exclude: ["updatedAt"] },
        include: [{
            model: Propietario,
            attributes: ['nombre', 'apellido'],
            through: { attributes: ['propietarios'] }
        }],
        where: {
            id: { [Op.and]: [id] }
        }
    })
        .then(edificios => {
            res.json(edificios);
        })
        .catch(error =>
            res.status(400).send(error))
});

router.post('/save', function (req, res, next) {
    let { nombre, numpisos, direccion, avaluo } = req.body;
    Edificio.create({
        nombre: nombre,
        numpisos: numpisos,
        direccion: direccion,
        avaluo: avaluo,
        createdAt: new Date(),
        updatedAt: new Date()
    })
        .then(edificios => {
            res.json(edificios);
        })
        .catch(error =>
            res.status(400).send(error))
});

router.put('/update', function (req, res, next) {
    let { id, nombre, numpisos, direccion, avaluo} =
        req.body;
    Edificio.update({
        nombre: nombre,
        numpisos: numpisos,
        direccion: direccion,
        avaluo: avaluo,
        createdAt: new Date(),
        updatedAt: new Date()
    },
        {
            where: {
                id: parseInt(id)
            }
        })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error => res.status(400).send(error))
});

router.delete('/delete/:id', function (req, res, next) {
    let id = parseInt(req.params.id);
    Edificio.destroy({
        where: {
            id: id
        }
    })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(error =>
            res.status(400).send(error))
});


module.exports = router;