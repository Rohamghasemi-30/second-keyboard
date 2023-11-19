let button= document.querySelector( '#switch' );
        button.addEventListener('click', function ()
{
    document.getElementsByTagName( 'body' )[0].classList.toggle( 'dark' );
})