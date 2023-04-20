import React, { Component } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default class Electronics extends Component {
  render() {
    return (
      <div>
        <DragDropContext>
        
          <Droppable droppableId="characters">
            {(provided) => (
              <ul className="characters">
                 <li>
                  varma
                 </li>
                 <li>
                  Krishna
                 </li>
                 <li>
                  Karthik
                 </li>
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        {/* < DragDropContext>
        <Draggable>
          <ul className="characters">
               krishna
              </ul>
          </Draggable>
        </DragDropContext> */}
      

      </div>
    )
  }
}
