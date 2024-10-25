import React, { useEffect, useState } from "react";
import ApiService from "../../Services/ApiService";
import Assessment from "../assessment/Assessment";

export default function FilmInfo(props) {
  const movie = props.data;
  
  const assessmentsData = [
    {
      user: 'João',
      photo: 'https://example.com/joao-avatar.jpg',
      rating: 8,
      comment: 'Ótimo filme, recomendo!',
    },
    {
      user: 'Maria',
      photo: 'https://example.com/maria-avatar.jpg',
      rating: 6,
      comment: 'Achei mediano, mas divertido.',
    },
    {
      user: 'Carlos',
      photo: 'https://example.com/carlos-avatar.jpg',
      rating: 9,
      comment: 'Incrível! A cinematografia e os efeitos visuais são de outro nível.',
    },
    {
      user: 'Ana',
      photo: 'https://example.com/ana-avatar.jpg',
      rating: 7,
      comment: 'Boa história, mas poderia ser um pouco mais curta.',
    },
    {
      user: 'Pedro',
      photo: 'https://example.com/pedro-avatar.jpg',
      rating: 5,
      comment: 'Não gostei tanto, achei o enredo confuso e os personagens pouco desenvolvidos.',
    },
    {
      user: 'Luiza',
      photo: 'https://example.com/luiza-avatar.jpg',
      rating: 10,
      comment: 'Melhor filme que já assisti! Emocionante do início ao fim.',
    },
    {
      user: 'Fernanda',
      photo: 'https://example.com/fernanda-avatar.jpg',
      rating: 8,
      comment: 'A trilha sonora é espetacular, vale a pena assistir!',
    },
    {
      user: 'Ricardo',
      photo: 'https://example.com/ricardo-avatar.jpg',
      rating: 4,
      comment: 'Esperava mais, o ritmo do filme foi muito lento pra mim.',
    },
    {
      user: 'Beatriz',
      photo: 'https://example.com/beatriz-avatar.jpg',
      rating: 7,
      comment: 'Gostei, mas senti que faltou algo para ser incrível.',
    },
    {
      user: 'Lucas',
      photo: 'https://example.com/lucas-avatar.jpg',
      rating: 9,
      comment: 'Surpreendente! Um dos melhores filmes do ano, com certeza.',
    }
  ];

  if (movie == undefined) {
    return <>Carregando informações do filme...</>;
  }
  return (
    <div key={movie.id} style={{ margin: "10px" }}>
      <img
        src={ApiService.getPosterUrl(movie.poster_path, 500)}
        alt={movie.title}
        style={{ width: "200px", height: "300px" }}
      />
      <h3>{movie.title}</h3>
      <p>Release Date: {movie.release_date}</p>
      <p>Rating: {movie.vote_average}</p>
      <p>{movie.overview}</p>
      <Assessment props={assessmentsData}/>
    </div>
  );
}
