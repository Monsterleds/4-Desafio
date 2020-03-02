import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import Icon from '../assets/icon.png';
import profile from '../assets/profile.png';
import profile1 from '../assets/profile1.png';
import profile2 from '../assets/profile2.png';
import profile3 from '../assets/profile3.png';
import profile4 from '../assets/profile4.png';

class HomePage extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: profile1
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: profile
            },
            content: " A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gabriel Lisboa",
          avatar: profile2
        },
        date: "04 Jun 2019",
        content: " Fala galera, beleza? \n Estou fazendo o Bootcamp GoStack da Rocketseat e está sendo muito massa! Alguém mais ai fazendo, comenta na publicação para trocarmos uma ideia.",
        comments: [
          {
            id: 1,
            author: {
              name: "Clara Lisboa",
              avatar: profile3
            },
            content: " Também estou fazendo o Bootcamp e estou adorando! Estou no terceiro módulo sobre Node e já tenho minha API dos desafios construida!"
          }, {
            id: 2,
            author: {
              name: "Cézar Toledo",
              avatar: profile4
            },
            content: " Que maaaaassa! Estou pensando em me inscrever na próxima turma pra ver qual é desse Bootcamp GoStack, dizem que os devs saem de lá com super poderes!"
          },
        ]
      },
    ]
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <div className="barra1">
              <img className="box1" src={Logo}></img>
              <div className="barraPerfil">
                <a className="box2">Meu Perfil</a>
                <img className="box3" src={Icon}></img>
              </div>
            </div>
          </nav>
        </header>
        <div className="FlexItems">
          {this.state.posts.map(post => <div className="PostItems" key={post.id} data={post}>
          <img className="ImgProfile" src={this.state.posts[post.id - 1].author.avatar}/>
            <div className="BoxUser">
              <p className="ProfileName">{this.state.posts[post.id - 1].author.name}</p>
              <p className="TimeName">{this.state.posts[post.id - 1].date}</p>
            </div>
            <p className="UserText">{this.state.posts[post.id - 1].content}</p>
            <hr noshade='noshade'/>
            {this.state.posts[post.id - 1].comments.map(comment => <div className="BoxResponse" key={comment.id} data={comment}>
            <img className="ImgProfile" src={this.state.posts[post.id - 1].comments[comment.id - 1].author.avatar}/>
              <div className="BoxResposta">
                <p className="ResponseText"><a className="ResponseName">{this.state.posts[post.id - 1].comments[comment.id - 1].author.name}</a>{this.state.posts[post.id - 1].comments[comment.id - 1].content}</p>
              </div>
            </div>
            )}
          </div>
          )}    
        </div>
      </>
    );
  }
}

export default HomePage;