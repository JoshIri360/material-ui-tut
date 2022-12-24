import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import React from "react";
import { IconButton } from "@material-ui/core";
import { DeleteOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";

const NoteCard = ({ note, handleDelete }) => {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton
              aria-label="settings"
              onClick={() => {
                handleDelete(note.id);
              }}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        ></CardHeader>
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
