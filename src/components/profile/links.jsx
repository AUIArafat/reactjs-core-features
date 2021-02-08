import React from 'react';

const Links = (props) => (
            <div className='Links'>
                    <h3>Social Links:</h3>
                    <ul>
                        <li>
                            <a href={props.social.fbAccount.url}>{props.social.fbAccount.title}</a>
                        </li>
                        <li>
                            <a href={props.social.hackerrankAccount.url}>{props.social.hackerrankAccount.title}</a>
                        </li>
                        <li>
                            <a href={props.social.inAccount.url}>{props.social.inAccount.title}</a>
                        </li>
                        <li>
                            <a href={props.social.gitHubAccount.url}>{props.social.gitHubAccount.title}</a>
                        </li>
                    </ul>
                </div>
            
        )
export default Links;