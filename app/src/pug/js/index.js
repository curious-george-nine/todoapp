'use strict';

$(function () {
  if (localStorage.getItem('dark')) {
    $('html').addClass('dark');
  } else {
    $('html').removeClass('dark');
  }
  $('#change-mode-btn').click(function () {
    if (!$('html').hasClass('dark')) {
      localStorage.setItem('dark', 'dark');
      $('html').addClass('dark');
    } else {
      localStorage.removeItem('dark');
      $('html').removeClass('dark');
    }
  });

  $('form').submit(function (event) {
    event.preventDefault();

    if ($('#todo-input').val().length > 0) {
      const val = $('#todo-input').val();
      $('#todo-list').append(`
        <li template="added" cache="$$lit-ias4cytia8c+9" class="bg-slate-300 w-full p-2 text-black transition duration-300 uppercase rounded dark:bg-slate-400 my-2 mx-auto cursor-default select-none todolist-wrap">
          <span class="todolist-inner">
            ${val}
          </span>
        </li>
      `);
      setTimeout(() => {
        $('#todo-input').val("");
      }, 50);

      const $todoListItems = document.getElementById("todo-list").children;
      for (const el of $todoListItems) {
        el.onclick = () => {
          el.classList.toggle('line-through')
        }
        el.oncontextmenu = e => {
          e.preventDefault();
          el.remove();
        }
      }
    } else {
      $('[role="alert"]').removeAttr('hidden');
      $('[role="alert"]').on('animationend', () => {
        $('[role="alert"]').attr('hidden', '');
      });
    }
  });
});