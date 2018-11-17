import { Component } from "react";
import _ from "./styles.scss";

export default class UpDownAccordeon extends Component {
  constructor(...args) {
    super(...args);
  }
  render() {
    return (
      <div className={_["accordeon"]}>
        <div className={_["item"]}>
          <input type="radio" name="btn" value="one" />
          <label htmlFor="btn" className="entypo-">
            Frans Hals
          </label>
          <article id="content-1">
            <p>
              <em>Frans Hals the Elder (c. 1582 – 26 August 1666)</em> was a Dutch Golden Age painter born in the Southern Netherlands (present-day
              Belgium). He is notable for his loose painterly brushwork, and helped introduce this lively style of painting into Dutch art. Hals was
              also instrumental in the evolution of 17th-century group portraiture.
            </p>
          </article>
        </div>

        <div className={_["item"]}>
          <input type="radio" name="btn" value="two" defaultChecked />
          <label htmlFor="btn" className="entypo-">
            Rembrandt van Rijn
          </label>
          <article id="content-2">
            <p>
              <em>Rembrandt Harmenszoon van Rijn (15 July 1606 – 4 October 1669)</em> was a Dutch painter and etcher. He is generally considered one
              of the greatest painters and printmakers in European art and the most important in Dutch history. His contributions to art came in a
              period of great wealth and cultural achievement that historians call the Dutch Golden Age when Dutch Golden Age painting, although in
              many ways antithetical to the Baroque style that dominated Europe, was extremely prolific and innovative.
            </p>
          </article>
        </div>

        <div className={_["item"]}>
          <input type="radio" name="btn" value="three" />
          <label htmlFor="btn" className="entypo-">
            Johannes Vermeer
          </label>
          <article id="content-3">
            <p>
              <em>Johannes, Jan or Johan Vermeer (1632 – December 1675)</em> was a Dutch painter who specialized in domestic interior scenes of
              middle-class life. Vermeer was a moderately successful provincial genre painter in his lifetime. He seems never to have been
              particularly wealthy, leaving his wife and children in debt at his death, perhaps because he produced relatively few paintings.
            </p>
          </article>
        </div>

        <div className={_["item"]}>
          <input type="radio" name="btn" value="four" />
          <label htmlFor="btn" className="entypo-">
            Jan Steen
          </label>
          <article id="content-4">
            <p>
              <em>Jan Havickszoon Steen (c. 1626 – buried 3 February 1679)</em> was a Dutch genre painter of the 17th century (also known as the Dutch
              Golden Age). Psychological insight, sense of humour and abundance of colour are marks of his trade.
            </p>
          </article>
        </div>
      </div>
    );
  }
}
