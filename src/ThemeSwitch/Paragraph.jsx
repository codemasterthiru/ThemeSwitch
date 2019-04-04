/**
 * importing the react package to extends the default react.component class
 */
import React from 'react'

/**
 * defining and declaring the Paragraph class component
 */
class Paragraph extends React.Component {
    /**
     * default render method of class
     */
    render() {
        /**
         * default return method of class
         */
        return(
        <div class="wrap">
            <h1>Lorem ipsum</h1>
            <p>Vestibulum sit amet ipsum lacus. Aliquam nisl enim&hellip; tristique tempus placerat at, posuere in lectus. Suspendisse potenti cras molestie, risus a enim convallis vitae luctus libero lacinia. Nulla vel magna sit amet dui <a href='#'>lobortis</a> commodo vitae vel nulla. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Aliquam tincidunt velit sit amet <a href='#'>ante hendrerit</a> tempus. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, iaculis pretium sem orci aliquet mauris. </p>
            <div class="box">
            <p>Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Vestibulum sit amet ipsum lacusâ¦ Suspendisse potenti. Nulla auctor eleifend 23rd of May turpis consequat pharetra.</p>
            </div>
            <p>Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, <a href='#'>iaculis pretium</a> sem orci aliquet mauris. Maecenas sit <em>amet tellus</em> nec mi gravida posuere non <a href='#'>pretium magna</a>. Curabitur consectetur; faucibus nisl ac varius. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh, iaculis pretium sem orci aliquet mauris. Nulla lobortis tempus commodo. </p>
            <h2>Curabitur consectetur</h2>
            <p>Nulla lobortis tempus commodo? Suspendisse potenti. Sed dapibus, lectus sit amet adipiscing egestas, mauris est viverra nibh (iaculis pretium sem orci aliquet mauris). Suspendisse potenti H<sub>2</sub>0. </p>
            <ul>
                <li>Sed dapibus, lectus sit amet adipiscing egestas</li>
                <li>Sed dapibus, lectus sit amet adipiscing egestas</li>
                <li>Vestibulum sit amet ipsum lacus</li>
            </ul>
            <p>Donec tempus tempus tellus, ac lacinia turpis mattis ac! Cras molestie risus a enim convallis vitae luctus libero lacinia. Donec et nisi dictum <a href='#'>felis sollicitudin</a> congue. Cras molestie risus a <q cite='http://www.heydonworks.com'>enim convallis vitae</q> luctus libero lacinia. Fusce ac sodales magna &hellip; Suspendisse potenti. Vestibulum sit amet ipsum lacus&hellip; Suspendisse <em>potenti</em>. Nunc iaculis risus vel &#8216;Orci Ornare&#8217; dignissim sed vitae nulla. </p>
            <h2>Purus lectus venenatis urna</h2>
            <p>Cras molestie risus a <q cite='http://www.heydonworks.com'>enim convallis vitae</q> luctus libero lacinia. Donec tempus tempus tellus, ac lacinia turpis mattis ac. Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id &#8216;molestie&#8217; magna risus ut nunc. Nulla auctor eleifend 23<sup>rd</sup> of May turpis consequat pharetra. Nulla auctor eleifend turpis consequat pharetra: </p>
            <img src="http://talesandtails.com/wp-content/uploads/2013/01/Greyhound-Soul-copy-800x491.jpg" alt="greyhound laying down" />
            <p>Duis sagittis, est sit amet gravida tristique, purus lectus venenatis urna, id molestie magna risus ut nunc. Lorem ipsum dolor sit amet, &mdash; consectetur adipiscing &mdash; elit. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Vestibulum sit amet ipsum lacus&hellip; Suspendisse potenti. Nulla auctor eleifend 23<sup>rd</sup> of May turpis consequat pharetra. </p>
            <p>Nulla lobortis tempus commodo? Nulla lobortis tempus <strong>commodo</strong>. Fusce ac sodales <code>.generate()</code> magna. Donec tempus tempus tellus, ac lacinia turpis mattis ac. Maecenas sit <q cite='http://www.heydonworks.com'>amet tellus nec mi gravida posuere</q> non pretium magna. Nunc iaculis risus vel orci ornare dignissim sed vitae nulla. Nulla vel magna sit &mdash; amet dui lobortis commodo &mdash; vitae vel nulla. </p>
            <img src="https://www.gnu.org/graphics/official%20gnu.svg" alt="GNU official logo in SVG" />
        </div>
        )
    }
}

/**
 * exporting the Paragraph class to use anywhere
 */
export { Paragraph }
export default { Paragraph}