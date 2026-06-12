const storageService = require("../services/storage.service")
const songModel = require("../models/song.model")
const id3 = require("node-id3")
const { get } = require("mongoose")

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer
  const {mood}= req.body
  const tags = id3.read(songBuffer)

  const [songFile, posterFile] = await Promise.all([
    storageService.uploadFile({
      buffer: songBuffer,
      fileName: tags.title + ".mp3",
      folder: "/cohort/moodify/songs"
    }),
    storageService.uploadFile({
      buffer: tags.image.imageBuffer,
      fileName: tags.title + ".jpeg",
      folder: "/cohort/moodify/posters"
    })
  ])
  

  const song = await songModel.create({
    title:tags.title,
    url:songFile.url,
    posterUrl:posterFile.url,
    mood
  })

  res.status(201).json({
    message:"song created successfully",
    song
  })
}

async function getSong(req,res) {
  const {mood} = req.query
  const query = mood ? { mood } : {}
  const songs = await songModel.find(query)
  res.status(200).json({
    message:"songs fetched successfully",
    songs
  })
}

module.exports = {
  uploadSong,
  getSong
}