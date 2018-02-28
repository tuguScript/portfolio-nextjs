import App from '../components/App'

export default (props) => (
    <App>
       <h1>{props.url.query.title}</h1>
       <p>This is the blog post content.</p>
    </App>
)