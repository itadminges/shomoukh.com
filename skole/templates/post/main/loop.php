<div class="post-row">
	<?php $has_full_width_thumb = false; ?>
	<?php if ( has_post_thumbnail() ) : ?>
		<div class="post-media">
		<?php
			$has_post_thumb_shape = current_theme_supports( 'vamtam-post-thumb-shape' ) && apply_filters( 'vamtam-post-thumb-shape', true );
			$has_full_width_thumb = preg_match( '/width="([0-9]+)"/', get_the_post_thumbnail(), $matches ) ? intval( $matches[1] ) >= intval( $GLOBALS['vamtam_theme']['site-max-width'] ) : false;
		?>
			<div class='media-inner<?php echo esc_attr( $has_post_thumb_shape ? ' vamtam-has-post-thumb-shape' : '' ); ?>'>
				<a href="<?php the_permalink() ?>" title="<?php the_title_attribute()?>">
					<?php the_post_thumbnail( 'full' ) ?>
				</a>
				<?php if ( $has_post_thumb_shape ) : ?>
					<div class="vamtam-shape"></div>
				<?php endif; ?>
			</div>
		</div>
	<?php endif; ?>
	<div class="post-content-outer<?php echo esc_attr( $has_full_width_thumb ? ' vamtam-full-width-thumb' : '' ); ?>">
		<?php
			get_template_part( 'templates/post/meta/categories' );

			include locate_template( 'templates/post/header-large.php' );
			include locate_template( 'templates/post/main/actions.php' );
			include locate_template( 'templates/post/content.php' );
			include locate_template( 'templates/post/meta-loop.php' );
		?>
	</div>
</div>
