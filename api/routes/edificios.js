var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const Edificio = require('../models').edificios;
const Propietario = require('../models').propietario;
const {Op} = require('sequelize');

router.get('/findAll/json',
    function(req, res, next) {
        Edificio.findAll({
            attributes: { exclude: ["updatedAt"] },
            include: [{
            model: Propietario,
            attributes: ['nombre', 'apellido'],
            through: {attributes: ['propietarios']}
            }],
            })
    .then(edificios => {
    res.json(edificios);
    })
    .catch(error =>
    res.status(400).send(error))
    });

    router.get('/findAll/view', function(req, res, next) {

        Edificio.findAll({
            attributes: { exclude: ["updatedAt"] },
            include: [{
            model: Propietario,
            attributes: ['nombre', 'apellido'],
            through: {attributes: ['propietarios']}
            }],
        })
        .then(edificios => {
        res.render('edificios', { title: 'Edificios', arrEdificios: edificios });
        })
        .catch(error => res.status(400).send(error))
        });

    router.get('/findAllByRate/json', function(req, res, next) {

        let lower = parseFloat(req.query.lower);
        let higher = parseFloat(req.query.upper);

        Edificio.findAll({
            attributes: { exclude:
            ["updatedAt"] } ,
            include: [{
            model: Propietario,
            attributes: ['nombre', 'apellido'],
            through: {attributes: []}
            }],
            where: {
            calificacion: {
            [Op.between]: [lower, higher]
            }
            }
            })
            .then(edificios => {
            res.json(edificios);
            })
            .catch(error =>
            res.status(400).send(error))
        });

    router.get('/findAllById/:id/json', function(req, res, next) {
            let id = parseInt(req.params.id);
            
            Edificios.findAll({
                attributes: { exclude: ["updatedAt"]
                } ,
                include: [{
                model: Propietario,
                attributes: ['nombre', 'apellido'],
                through: {attributes: ['propietarios']}
                }],
                where: {
                    id: {[Op.and]: [id]}
                }
                })
                .then(edificios => {
                res.json(edificios);
                })
                .catch(error =>
                res.status(400).send(error))});


                router.get('/findAllById/:id/view', function(req, res, next) {
                    let id = parseInt(req.params.id);
                    console.log(`Received request for ID: ${id}`);
                    
                    Edificio.findAll({
                        attributes: { exclude:
                        ["updatedAt"] } ,
                        include: [{
                        model: Propietario,
                        attributes: ['nombre', 'apellido'],
                        through: {attributes: ['propietarios']}
                        }],
                        where: {
                            id: {[Op.and]: [id]}
                
                        }                        })
                        .then(edificios => {
                            res.render('edificios', { title: 'Edificios', arrEdificios: edificios });
                        })
                        .catch(error =>
                        res.status(400).send(error))
                    });
                
            
module.exports = router;
