import { InputBase, Menu, MenuItem } from '@material-ui/core';
import { ArrowDropDown } from '@material-ui/icons';
import { useCallback, useEffect, useState } from 'react';
import { UserRole } from '../../API';
import { CssVariables } from '../../css-variables';
import { User } from '../../models';
import styles from '../../styles/form.module.scss';

export interface InputProps {
	id?: string;
	name?: string;
	label?: string;
	placeholder?: string;
	value?: string;
	defaultValue?: string;
	onChange?(value: string): any;
	hint?: string;
	error?: string;
}

/**
 *
 * @param props
 * @returns a React Node
 *
 * hides a simple input containing a selected role and exposes it to higher level accessors.
 * it then shows a simple input with edition enabled.
 */

export function RoleInputField(props: InputProps) {
	const [selectedRole, setSelectedRole] = useState<string>(UserRole.INFLUENCER);
	const [selectedRoleName, setSelectedRoleName] = useState<string>(
		UserRole.INFLUENCER
	);
	const [roleMenuAnchor, setRoleMenuAnchor] = useState<HTMLElement>();
	const items = Object.keys(UserRole).map(userRole => {
		return {
			label: userRole.toString().split('_').join(' '),
			value: userRole,
		};
	});
	useEffect(() => {
		if (props.value || props.defaultValue) {
			let roleKey = props.value || props.defaultValue || '';
			if (typeof roleKey === 'string') {
				let found = items.find(r => r.value === roleKey);
				if (found) {
					setSelectedRole(found.value);
				}
			}
		}
	}, [props]);

	const onRoleSelected = useCallback(
		(role: string, roleLabel: string) => {
			setSelectedRole(role);
			setSelectedRoleName(roleLabel);
			setRoleMenuAnchor(undefined);
			if (props.onChange) {
				props.onChange(role);
			}
		},
		[props]
	);

	return (
		<div className={styles.singleLineInput}>
			{props.label && (
				<label htmlFor={props.id || ''} className={styles.label}>
					{props.label}
				</label>
			)}
			<div
				className={styles.inputRow}
				onClick={ev => setRoleMenuAnchor(ev.currentTarget)}
			>
				<InputBase
					type='text'
					className={styles.input}
					placeholder={props.placeholder}
					value={selectedRoleName}
					onChange={ev => ev.preventDefault()}
					endAdornment={<ArrowDropDown fontSize='small' />}
					onClick={ev => setRoleMenuAnchor(ev.currentTarget)}
				/>
			</div>
			<div className={styles.hintAndErrors}>
				{props.hint && <span className={styles.hint}>{props.hint}</span>}
				{props.error && <span className={styles.error}>{props.error}</span>}
			</div>
			<Menu
				anchorEl={roleMenuAnchor}
				open={Boolean(roleMenuAnchor)}
				onClose={() => setRoleMenuAnchor(undefined)}
			>
				{items.map((c, index) => {
					return (
						<MenuItem
							key={index}
							onClick={() => onRoleSelected(c.value, c.label)}
						>
							<span style={{ fontSize: CssVariables.fontSizeBodyText }}>
								{c.label}
							</span>
						</MenuItem>
					);
				})}
			</Menu>
		</div>
	);
}
