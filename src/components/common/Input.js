import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';

const Input = (props) => {
	const { value, onChangeText, label } = props;
	const { inputStyle, labelStyle, containerStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={labelStyle}>{label}</Text>
			<TextInput
				style={labelStyle}
				value={value}
				onChangeText={onChangeText}
				style={{ height: 20, width: 100 }}
			/>
		</View>
	);
};

const styles = {
	inputStyle: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2,
	},
	labelStyle: {
		fontSize: 18,
		paddingLeft: 20,
		flex: 1
	},
	containerStyle: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	}
};

Input.propTypes = {
	label: PropTypes.string.isRequired
};

export { Input };
