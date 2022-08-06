import React, { Profiler } from 'react';


function withProfiler(WrappedComponent, id = '') {
	class withProfiler extends React.Component {
		constructor(props) {
			super(props);

		}

		render() {
			return (
				<Profiler id='app' >
					<WrappedComponent {...this.props} />
				</Profiler>
			)
		}
	}
	withProfiler.displayName = `WithSubscription(${getDisplayName(WrappedComponent)})`;
	return withProfiler;
}



export default withProfiler;


function getDisplayName(WrappedComponent) {
	return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}