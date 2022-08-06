
import { FormattedMessage } from 'react-intl';
const About = () => {
	return (
		<>
			<h2>
				<FormattedMessage id="about.title" />
				<a href='https://pm-links.w3spaces.com/'> <FormattedMessage id="about.link" /></a>
			</h2>
		</>

	);
}

export default About;