import React from "react";
import Card from "./Card";
import SearchForm from "./SearchForm";
import "./App.css";
import dataSource from "./dataSource";
import NavBar from "./NavBar";
import AlbumList from "./AlbumList";
import NewAlbum from "./NewAlbum";
import OneAlbum from "./OneAlbum";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory} from "history";

const history = createBrowserHistory();

class App extends React.Component
{
     state = { albumList: [ ], searchPhrase: "", currentlySelectedalbumId: -1}

     updateSingleAlbum = (id) => {
          console.log("UpdateSingleAlbum =", id);
          var indexNumber = 0;
          for(var i = 0; i <this.state.albumList.length; i++){
               if(this.state.albumList[i].id == id){
                    indexNumber = i;
               }
          }

          this.setState({currentlySelectedalbumId : indexNumber}, history.push('/show/' + indexNumber), console.log("state", this.state));

     }

     renderedList = () => {
          return this.state.albumList.map (
               (album) => {
                    //if(album.description.toLowerCase().includes(this.state.searchPhrase.toLowerCase()) || this.state.searchPhrase === "")
                         return (<Card key={album.id} albumId={album.id} albumTitle={album.title} albumDescription={album.description} buttonText="OK" imgURL={album.image}/>);
                    //else
                    //     console.log("Does not match " + this.state.searchPhrase);
               }
          )
     }

     componentDidMount()
     {
          this.loadAlbums();
     }

     loadAlbums = async () =>
     {
          const response = await dataSource.get('/albums');
          this.setState( {albumList: response.data} );
     }

     updateSearchResults = async (phrase) =>
     {
          console.log("phrase is " + phrase);
          this.setState( {searchPhrase: phrase});
          const response = await dataSource.get('/albums/search/description/' + phrase);
          this.setState( {albumList: response.data} );
     }

     render()
     {
          return (
               <Router history={history}>
               <div>
                    <NavBar />
                    <Switch>
                         <Route exact path="/" render = { () => {
                              return (
                              <div>
                                   <SearchForm onSubmit={this.updateSearchResults} />
                                   <AlbumList albumList={this.state.albumList} onClick={this.updateSingleAlbum} />
                              </div>
                         )}} />
                         <Route exact path="/new" component={NewAlbum} />
                         <Route exact path="/show/:albumId" render = { () => <OneAlbum album={this.state.albumList[this.state.currentlySelectedalbumId]} /> } />
                    </Switch>
               </div>
               </Router>
          )
     }
}

export default App;
