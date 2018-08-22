<?php
/**
 * @file
 * Returns the HTML for a single Drupal page.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728148
 */
?>


<header class="header" id="header" role="banner">

<?php  $header_top = render($page['header_top']);?>
<?php  if ($header_top): ?>
    <div class="header_top" role="complementary">
        <div class="header_top_inner"><?php print $header_top; ?></div>
    </div>
<?php endif; ?> 
    
    
    
  <div class="header__inner">

    <?php if ($secondary_menu): ?>
      <nav class="header__secondary-menu" id="secondary-menu" role="navigation">
        <?php print theme('links__system_secondary_menu', array(
          'links' => $secondary_menu,
          'attributes' => array(
            'class' => array(
              'links',
              'inlineLinks--bordered--double',
              'clearfix',
            ),
          ),
          'heading' => array(
            'text' => isset($secondary_menu_heading) ? $secondary_menu_heading : '',
            'level' => 'h2',
            'class' => array('element-invisible'),
          ),
        )); ?>
      </nav>
    <?php endif; ?>

    <?php if ($logo): ?>
        <a href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>" rel="home" class="header__logo" id="logo"><img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="header__logo-image" /><span class="sitename"><?php print $site_name; ?></span><br><span class="siteslogan"><?php print $site_slogan; ?></span></a>
  <?php endif; ?>

  <?php print render($page['header']); ?>
  </div>
</header>

<?php print render($page['navigation']); ?>

<?php
  // Render the sidebars to see if there's anything in them.
  $sidebar_first_sticky  = render($page['sidebar_first_sticky']);
  $sidebar_first  = render($page['sidebar_first']);
  $sidebar_second = render($page['sidebar_second']);
?>

  <?php print render($page['highlighted']); ?>
<div id="page">



    <div id="main">
      
        <div id="breadcrumb">
           <?php print $breadcrumb; ?>
        </div>
     
    <aside class="sidebars sidebar-left">  
    <?php if ($sidebar_first_sticky): ?>
      <aside class="sidebar-first-sticky-region sticky" role="complementary">
        <?php print $sidebar_first_sticky; ?>
      </aside>
    <?php endif; ?>   
      
    <?php if ($sidebar_first): ?>
      <aside class="sidebar-first-region" role="complementary">
        <?php print $sidebar_first; ?>
      </aside>
    <?php endif; ?>    
    </div>
    
    <div id="content" class="column" role="main">
    
      <a href="#skip-link" id="skip-content" class="element-invisible">Go to top of page</a>
    
      <a id="main-content"></a>
      <?php print render($title_prefix); ?>
      <?php if ($title): ?>
        <h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
      <?php endif; ?>
      <?php print render($title_suffix); ?>
      <?php print $messages; ?>
      <?php print render($tabs); ?>
      <?php print render($page['help']); ?>
      <?php if ($action_links): ?>
        <ul class="action-links"><?php print render($action_links); ?></ul>
      <?php endif; ?>
      <?php print render($page['content']); ?>
      <?php print $feed_icons; ?>
    </div>
    
        <?php if ($sidebar_second): ?>
          <aside class="sidebars sidebar-second-region" role="complementary">
            <?php print $sidebar_second; ?>
          </aside>
        <?php endif; ?>
    
      </div>


</div>

<?php print render($page['bottom']); ?>
<?php print render($page['footer']); ?>
