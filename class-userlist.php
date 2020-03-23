<?php
	/**
	 * Template Class Doc Comment
	 *
	 * @package  UserList
	 * @author   Mathew
	 */

	/**
	 * Template File Doc Comment
	 * Plugin Name: Custom Endpoint
	 * Plugin URI: https://github.com/kamalsgit/customendpointurl/
	 * description: To create a custom endpoint link and display the user datas by using api.
	 * Version: 2.0
	 * Author: Mathew
	 */
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
	require ABSPATH . '/wp-load.php';
	/**
	 * To create a class for custom endpoint.
	 */
class UserList {
		/** Construct function */
	public function __construct() {
		add_action( 'wp_footer', array( $this, 'custom_styles_scripts' ) );
		register_activation_hook( __FILE__, array( $this, 'plugin_activate' ) );
		add_action( 'init', array( $this, 'rewrite_urls' ) );
		add_filter( 'query_vars', array( $this, 'query_vars_list' ) );
		add_action( 'template_include', array( $this, 'change_template' ) );
	}
		/** Adding styles and scripts */
	public function custom_styles_scripts() {
		wp_register_script( 'custom-api-script', plugins_url( 'js/main.js', __FILE__ ), '', '1.1', true );
		wp_enqueue_script( 'custom-api-script' );
		wp_register_style( 'custom-plugin-style', plugins_url( 'css/custom_styles.css', __FILE__ ), array(), '1.0' );
		wp_enqueue_style( 'custom-plugin-style' );
	}
		/** Plugin activate function */
	public function plugin_activate() {
		set_transient( 'vp_flush', 1, 60 );
	}
		/** Creating custom endpoint */
	public function rewrite_urls() {
		add_rewrite_endpoint( 'dump', EP_PERMALINK );
		add_rewrite_rule( '^user-list$', 'index.php?customendpoint=1', 'top' );
		if ( get_transient( 'vp_flush' ) ) {
			delete_transient( 'vp_flush' );
			flush_rewrite_rules();
		}
	}
		/** Enabling permalink */
		/**
		 * Define template file.
		 *
		 * @param string $vars is declare the permalink.
		 */
	public function query_vars_list( $vars ) {
		$vars[] = 'customendpoint';
		return $vars;
	}
		/** Creating a custom template */
		/**
		 * Define template file.
		 *
		 * @param string $template is declare the template name.
		 */
	public function change_template( $template ) {
		if ( get_query_var( 'customendpoint', false ) !== false ) {
			$new_template = locate_template( array( 'template-userlist.php' ) );
			if ( '' !== $new_template ) {
				return $new_template;
			}
			/** Check template in the plugin directory */
			$new_template = plugin_dir_path( __FILE__ ) . 'templates/template-userlist.php';
			if ( file_exists( $new_template ) ) {
				return $new_template;
			}
		}
		return $template;
	}
}

	new UserList();

