<?php
/**
 * Template Class Doc Comment
 *
 * @package  UserList
 * @author   Mathew
 */

/**
 * Template Name: Userlists Template
 */
get_header();
?>
	<div class="user_list_wrapper">
		<select id="select_val" onchange="selectLists(this.value)">
			<option value="Users" >Users</option>
			<option value="Posts">Posts</option>
			<option value="Comments">Comments</option>
		</select>
		<div id="usersDetails"></div>
		<div id="usersList"></div>
	</div>

<?php
get_footer();
?>
