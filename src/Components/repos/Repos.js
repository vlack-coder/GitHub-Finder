import React, {useContext} from 'react'
import RepoItem from './RepoItem'
import GithubContext from '../../context/gthub/githubContext'


const Repos = () => {
    const githubContext = useContext(GithubContext)
    return (
        Repos != null &&
        <div> 
        {githubContext.repos.map(repo => <RepoItem repo={repo} key={repo.id} />)}
        </div>
    )
}


export default Repos
